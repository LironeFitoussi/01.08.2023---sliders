export default function EducationInput() {
    return (
        <section>
            <div>
                <label htmlFor="">Institution</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Proffesion</label>
                <input type="text" />
            </div>
            <div>
                <p>Years</p>
                <label htmlFor="">From</label>
                <input type="date" />
                <label htmlFor="">To</label>
                <input type="date" />
            </div>
            <div>
                <input type="text" placeholder="Skills" />
                <button type='button'> + Add Skills</button>
            </div>
        </section>

    )
}