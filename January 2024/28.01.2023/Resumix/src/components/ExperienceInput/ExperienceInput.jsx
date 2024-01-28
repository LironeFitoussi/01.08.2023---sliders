export default function ExperienceInput() {
    return (
        <section>
            <div>
                <label htmlFor="">Company</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Podition</label>
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
                <input type="text" placeholder="Achivment" />
                <button type='button'> + Add Achivments</button>
            </div>
        </section>

    )
}