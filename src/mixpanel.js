import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.REACT_APP_MIX_PANEL_TOKEN, { debug: true, })

export const trackEvent = (eventName, properties = {}) => {
  mixpanel.track(eventName, properties);
}