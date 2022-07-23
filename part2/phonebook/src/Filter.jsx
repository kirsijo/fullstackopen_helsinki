const Filter = (props) => {
  return (
    <div>
      filter shown with:
      <input defaultValue={props.searchValue} onChange={props.search} />
    </div>
  );
};

export default Filter;
