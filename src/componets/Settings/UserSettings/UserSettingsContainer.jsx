import React from "react";

const UserSettings = (props) => {

    const newNameElement = React.createRef();

     const changeFormName =() => {
        let text = newNameElement.current.value;
    }


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label>Имя: <input  onChange={changeFormName} ref={newNameElement} placeholder="Name" type="text"/></label>
                </div>
                <div>
                    <label>Фамилие: <input placeholder="LastName" type="text"/></label>
                </div>
                <div>
                    <label>Страна: <input placeholder="Country" type="text"/></label>
                    <label>Город: <input placeholder="City" type="text"/></label>
                </div>
                <div>
                    <label>Год: <input placeholder="Age" type="number"/></label>
                </div>
                <button>Save</button>
            </form>

        </div>
    );
}

export default UserSettings;