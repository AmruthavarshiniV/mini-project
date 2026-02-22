async function searchSchemes() {
    const keyword = document.getElementById("searchInput").value;

    const response = await fetch("/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: keyword })
    });

    const data = await response.json();
    const resultDiv = document.getElementById("searchResults");
    resultDiv.innerHTML = "";

    if (data.length === 0) {
        resultDiv.innerHTML = "<p>No schemes found.</p>";
        return;
    }

    data.forEach(scheme => {
        resultDiv.innerHTML += `
            <div class="scheme-card">
                <h3>${scheme.name}</h3>
                <p><strong>Benefits:</strong> ${scheme.benefits}</p>
                <p><strong>Documents:</strong> ${scheme.documents.join(", ")}</p>
                <a href="${scheme.apply_link}" target="_blank">Apply Here</a>
            </div>
        `;
    });
}