// MenuList.tsx
function MenuList(props) {
  return (
    <div>
      {props.technologies.map((tech, index) => (
        <p key={index}>{tech}</p> // Access the data using props.technologies
      ))}
    </div>
  );
}

export default MenuList;