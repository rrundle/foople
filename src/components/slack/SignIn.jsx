import React from 'react'

const SlackSignIn = () => {
  return (
    <a
      href={`https://slack.com/oauth/authorize?scope=identity.basic,identity.avatar,identity.email&client_id=1042026065250.2926712584193&state=login`}
    >
      <img
        alt="Sign in with Slack"
        height="40"
        width="172"
        src="https://platform.slack-edge.com/img/sign_in_with_slack.png"
        srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"
      />
    </a>
  )
}

export default SlackSignIn
