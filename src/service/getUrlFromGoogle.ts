const dev = false
const env = dev ? 'http://localhost:5000' : 'https://icoffee.onrender.com'

export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`

  const options = {
    redirect_uri: `${env}/api/auth/google/callback`,
    client_id:
      '521382849500-4u14m8gnh9d3kbh8nhq8ge49lsq48vkc.apps.googleusercontent.com',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: from,
  }

  const qs = new URLSearchParams(options)

  return `${rootUrl}?${qs.toString()}`
}
