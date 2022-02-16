export const el = (tag, attributes, children) => {
  const elem = document.createElement(tag);

  for(const keys in attributes) {

    if (keys === "className") {
      elem.className = attributes.className;

    }else if (keys === 'id'){
      elem.id = attributes.id;

    }else if (keys === 'style'){
      elem.style = attributes.style;

    }else if (keys === 'onclick'){
      elem.onclick = attributes.onclick;

    } else if (keys === 'innerText'){
      elem.innerHTML = attributes.innerText;

    }else if (keys === 'img'){
      elem.src = attributes.img.src;
      elem.alt = attributes.img.alt;
    }
    else if (keys === 'type'){
      elem.type = attributes.type;
    }
    else if (keys === 'name'){
      elem.name = attributes.name;
    }
    else if (keys === 'for'){
      elem.for = attributes.for;
    }
  }

  if(!!children){
    children.forEach(child => elem.appendChild(child))
  }
  return elem;
}