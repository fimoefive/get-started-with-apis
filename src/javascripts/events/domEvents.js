// import formModal from '../components/forms/formModal';
import { showJoke } from '../components/cards/jokes';
// import { showPins } from '../components/pins';
const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR SHOWING THE PINS OF A BOARD
    if (e.target.id.includes('show-pins')) {
      const boardId = e.target.id.split('--')[1];
      pinBoardInfo(boardId).then((boardObj) => {
        createPin(boardObj.boardPins);
        boardInfo(boardObj.board);
      });
    }
  });
};

export default domEvents;
