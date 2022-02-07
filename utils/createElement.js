export const el = (tag, attributes, children) => {
  const elem = document.createElement(tag);

  for(const keys in attributes) {

    if (keys === "className") {
      elem.className = attributes.className;

    }else if (keys === 'style'){
      elem.style = attributes.style;
      // console.log(attributes.style)

    }else if (keys === 'onclick'){
      elem.onclick = attributes.onclick;

    }else if (keys === 'innerText'){
      elem.innerHTML = `${attributes.innerText}`;

    }else if (keys === 'img'){
      elem.src = `${attributes.img.src}`;
      elem.alt = `${attributes.img.alt}`;
    }
  }

  if(!!children){
    children.forEach(child => elem.appendChild(child))
  }
  return elem;
}
