/*function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    
    domElement.innerHTML = reactElement.children; // Fixed: innerHTML and children (not Children)
  
    domElement.setAttribute('href', reactElement.props.href);   // Correct href
    domElement.setAttribute('target', reactElement.props.target); // Correct target
  
    container.appendChild(domElement);
  }
    */
  
  const reactElement = {
    type: 'a',
    props: {
      href: 'http://google.com',   // Fixed: this should be a plain string, not markdown
      target: '_blank'
    },
    children: 'Click me to visit Google' // Fixed: lowercase 'children'
  };
  
  const mainContainer = document.querySelector('#root');
  
  customRender(reactElement, mainContainer);
  