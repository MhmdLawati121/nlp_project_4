// Import function
import { updateScreen } from '../js/displayData';

describe('updateScreen function', () => {
    test('updates screen elements with given data', () => {

        // setting up mock data
        const mockData = {
            subjectivity: 'Subjectivity',
            score_tag: 'Score Tag',
            sentence_list: [{ text: 'Sentence Text' }],
        };

        // setting up mock document element
        document.body.innerHTML = `
          <p id="polarity"></p>
          <p id="subjectivity"></p>
          <p id="text"></p>
        `
        // save elements for verification
        const polElem = document.getElementById("polarity");
        const subjElem = document.getElementById("subjectivity");
        const txtElem = document.getElementById("text");

        // call the function with mock data
        updateScreen(mockData);

        // verify work
        expect(subjElem.innerHTML).toBe('Subjectivity');
        expect(polElem.innerHTML).toBe('Score Tag');
        expect(txtElem.innerHTML).toBe('Sentence Text');
    });
});
