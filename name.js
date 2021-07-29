// Checks whether they typed something into the input field, returns a "secret" if so, and returns a lament if it's left blank before clicking.

const btnClick = document.getElementById('btn');
const userName = document.getElementById('first-name');

btnClick.addEventListener('click', () => {
    if (userName.value != '') {
    const validMessage = `<p>${userName.value}, I know a bank whereon the wild thyme blows, Where oxlips and the nodding violet grows.</p>`;
    document.querySelector('p.return-name').innerHTML = validMessage;
    } else {
    const invalidMessage = `<p>O, be some other name! What's in a name? A rose by any other name would smell as sweet.</p>`;
    document.querySelector('p.return-name').innerHTML = invalidMessage;
    }
});