import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number:'',
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { addNewContact } = this.props;
    addNewContact({ ...this.state });
    this.setState({ name: '',number:'' });
  };
  render() {
    const { name,number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button>Add new contact</button>
      </form>
    );
  }
}

export default Form;
