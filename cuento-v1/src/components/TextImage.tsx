function TextImage({ ...props }) {
  return (
    <>
      <div className="flex-1 flex text-center items-center p-10 font-sans font-bold text-2xl">
        <p style={{ backgroundColor: props.bgColor }}>{props.text}</p>
      </div>
      <div className="bg-contain bg-center bg-no-repeat flex-1">
        <img src={props.imagen} alt="imagen-cuento" />
      </div>
    </>
  );
}

export default TextImage;
