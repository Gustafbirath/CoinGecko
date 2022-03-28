const InputField = (props) => {
    return (
        <div className="input-group" >
            <input onChange={(e) => props.searchFunc(e.target.value)} type="text" className="form-control" />
        </div>
    );
};

export default InputField;