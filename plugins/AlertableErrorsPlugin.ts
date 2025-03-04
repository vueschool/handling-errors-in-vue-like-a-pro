export default defineNuxtPlugin((nuxtApp) => {
  // for all lessons but #10
  // we don't want this pluign to run
  // so comment out the return on lesson 10
  // return;

  const nuxtDefaultErrorHandler = nuxtApp.vueApp.config.errorHandler;

  nuxtApp.vueApp.config.errorHandler = (err, instance, info) => {
    if (err instanceof AlertableError) {
      useAlert().error(err.uxMessage, {
        title: import.meta.dev ? err.toString() : "",
      });
    } else {
      nuxtDefaultErrorHandler
        ? nuxtDefaultErrorHandler(err, instance, info)
        : null;
    }
  };
});
