export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  // If middleware is called from hot module replacement, ignore it
  if (process.browser) {
    document.getElementById('ar1').checked = false
  }
}
