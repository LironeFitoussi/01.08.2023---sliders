import { MEMBERS_DATA } from "../MEMBERS_DATA"
import Member from "./Member/Member.jsx"

export default function Members() {
    return (
        <section className="members-comp">
            {MEMBERS_DATA.map((memberData) => {
                // console.log(memberData);
                return <Member {...memberData} />
            })}

        </section>
    )
};