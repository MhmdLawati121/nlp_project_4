// import handleSubmit function
import { handleSubmit } from "../js/formHandler";

// manual mocking fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            subjectivity: 'subjective',
            polarity: 'p+',
            text: 'test sample'
        }),
    })
);

// mocking client library (isn't recognized by jest by default)
global.Client = {
    updateScreen: jest.fn()
};

describe('handleSubmit function', () => {
    test('gets data from api and calls updateScreen', async () => {

        // mock elements
        document.body.innerHTML = `
                <input type="text" id="url" value="https://testURL.com">
                <div id="message"></div>
        `;

        // mock event :: to call handleSubmit function must be by event
        const event = {
            preventDefault: jest.fn()
        };

        await handleSubmit(event);

        // verify event is prevented 
        expect(event.preventDefault).toHaveBeenCalled();

        // verify fetch works
        expect(fetch).toHaveBeenCalledWith("/submit-url", {
            method: 'post',
            body: JSON.stringify({ url: 'https://testURL.com' }),
            headers:
                { "Content-Type": "application/json" }
        })
    });
});
