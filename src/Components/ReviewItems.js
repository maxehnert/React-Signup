import React from 'react';

const UserInfo = (props) => {
  // console.log(props)
  const name = props.baseKey.split('signup')[1]
  const nameLower = name//.toLowerCase()
  return (
    <div>
      <div className={"col-xs-12 col-md-12 review-" + nameLower}>
        <div className={"review-title review-" + nameLower + "-title"}>{name}</div>
        <div className={"review-value review-" + nameLower + "-value"}>{props.baseValue}</div>
      </div>
    </div>
  )
}

const SubInfo = (props) => {
  console.log(props);
  const name = props.baseKey.split('signup')[1]
  const nameLower = name//.toLowerCase()
  return (
    <div>
      <div className={"col-xs-12 col-md-6 review-" + nameLower}>
        <div className={"review-title review-" + nameLower + "-title"}>{name}</div>
        <div className={"review-value review-" + nameLower + "-value"}>{props.baseValue}</div>
      </div>
    </div>
  )
}

export { UserInfo, SubInfo }
