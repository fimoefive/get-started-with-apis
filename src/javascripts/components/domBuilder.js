const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
      <div id="form-container"></div>
      <div id="header"></div>
      <div id="button-container"></div>
      <div id="display-section" class="d-flex flex-row flex-wrap justify-content-center">
      </div>
  </div>`;
};

export default domBuilder;
