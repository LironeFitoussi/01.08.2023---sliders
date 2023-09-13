// Declare travelObject as let instead of const
let travelObject = {};

document.querySelector("#loadForm").addEventListener("click", () => {
    document.querySelector("#placeContainer").innerHTML = `
        <form id="travelForm">
            <label>Load station</label>
            <input type="text" id="loadStation">
            <label>Unload station</label> <!-- Corrected typo here -->
            <input type="text" id="unLoadStation">
            <label>Travel Duration (in Minutes)</label>
            <input type="number" id="travelDuration">
            <button id="submitBtn">Submit Travel</button> <!-- Corrected typo here -->
        </form>
    `;

    document.querySelector("#submitBtn").addEventListener("click", (e) => {
        e.preventDefault();
        travelObject = {
            loadStation: document.querySelector("#loadStation").value,
            unLoadStation: document.querySelector("#unLoadStation").value,
            travelDuration: document.querySelector("#travelDuration").value
        };

        console.log(travelObject);
    });
});
