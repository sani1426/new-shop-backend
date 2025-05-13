const verifyEmailTemplate = ({name , url})=> {
    return `
    <p>Dear ${name}</p>
    <P>Thank You For registering newShop .</P>
    <a href=${url}  style="color:white;background:blue; margin-top:10px;padding: 10px">
    Verify Email
    </a>
    `
}

export default verifyEmailTemplate