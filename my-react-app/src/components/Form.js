const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <input type="text" placeholder="Item description" />
      <input type="number" placeholder="Quantity" min="1" />
      <button>Add</button>
    </div>
  );
};

export default Form;