import Social from "../Social";

export default function Member({profilePic, fullName, position, about, social}) {
    console.log(profilePic);
    return (
        <div>
            <img src={profilePic} alt={'profile pic ' + fullName.toLowerCase()} />
            <h1>{fullName}</h1>
            <span>{position}</span>
            <p>{about}</p>
            <Social links={social} />
        </div>
    )
}