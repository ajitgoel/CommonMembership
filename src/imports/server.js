import { VueSSR } from 'meteor/akryum:vue-ssr';
import CreateApp from './app';
import { Meteor } from 'meteor/meteor';
import './accountEmailTemplates';

const isDev = process.env.NODE_ENV !== 'production'

Meteor.publish('currentUserId', function () 
{
  console.warn(`Meteor publish currentUserId called with ${this.userId}`);
  return this.userId;
});

Meteor.startup(() => 
{
  process.env.MAIL_URL = 
    `${Meteor.settings.private.Mailgun.Protocol}://${Meteor.settings.private.Mailgun.Username}:${Meteor.settings.private.Mailgun.Password}@${Meteor.settings.private.Mailgun.SMTP_Hostname}:${Meteor.settings.private.Mailgun.Port}`;
});

// This will be called each time the app is rendered
VueSSR.createApp = function (context) 
{
  console.warn(`in createApp`);
  const s = isDev && Date.now()

  return new Promise((resolve, reject) => {
    const { app, router, store } = CreateApp({
      ssr: true,
    })

    // set router's location
    router.push(context.url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        reject({ code: 404 })
      }

      context.js = ''

      // Call preFetch hooks on components matched by the route.
      // A preFetch hook dispatches a store action and returns a Promise,
      // which is resolved when the action is complete and store state has been
      // updated.
      // Vuex Store prefetch
      Promise.all(matchedComponents.map(component => {
        return component.asyncData && component.asyncData({
          store,
          route: router.currentRoute,
        })
      })).then(() => {
        context.rendered = () => {
          isDev && console.log(`[SSR] Data prefetch: ${Date.now() - s}ms`)

          // After all preFetch hooks are resolved, our store is now
          // filled with the state needed to render the app.
          // Expose the state on the render context, and let the request handler
          // inline the state in the HTML response. This allows the client-side
          // store to pick-up the server-side state without having to duplicate
          // the initial data fetching on the client.

          context.js += `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`
        }
        resolve(app)
      }).catch(reject)
    })
  })
}
