function updateScreen(data) {
    // console.log(data); :: debugging
    const subj = document.getElementById("subjectivity");
    const pol = document.getElementById("polarity");
    const txt = document.getElementById("text");
    subj.innerHTML = data.subjectivity;
    pol.innerHTML = data.score_tag;
    txt.innerHTML = data.sentence_list[0].text;
}

export { updateScreen }