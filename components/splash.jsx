import React from 'react';
import Header from './header';
import CompanyForm from './companyForm';
import Dropzone from 'react-dropzone';
import PaymentForm from './paymentForm';

let key = 0;

export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      currentForm: 'company',
      companyInfo: {},
      photos: [],
      paymentInfo: {}
    };
  }

  onDrop(photo) {
    key += 1;
    photo[0].key = key;
    let newPhotoArray = this.state.photos.slice();
    newPhotoArray = newPhotoArray.concat(photo);
    this.setState({photos: newPhotoArray});
  }

  submitForm(nextForm, data) {
    if (nextForm === 'upload-creative') {
      this.setState({companyInfo: data});
    } else if (nextForm === 'confirm') {
      this.setState({paymentInfo: data});
    }
    this.setState({currentForm: nextForm});
  }

  removePhoto(name) {
    let newPhotoArray = this.state.photos.slice();
    newPhotoArray = newPhotoArray.filter(obj => {
      return obj.name !== name;
    });
    this.setState({photos: newPhotoArray});
  }

  displayPhotos() {
    // previously set a variable then returned
    return this.state.photos.map(photo => {
      return (
        <div className="img-w-delete">
          <img src={photo.preview} className="img-preview"></img>
          <a onClick={this.removePhoto.bind(this, photo.name)}>X</a>
        </div>
      );
    });
  }

  handleBidChange(photoName, event) {
    let newPhotoArray = this.state.photos.slice();
    newPhotoArray = newPhotoArray.map(photo => {
      if (photo.name === photoName) {
        photo.bid = event.target.value;
        return photo;
      }
      return photo;
    })
    this.setState({photos: newPhotoArray})
  }

  handleImpressionsChange(photoName, event) {
    let newPhotoArray = this.state.photos.slice();
    newPhotoArray = newPhotoArray.map(photo => {
      if (photo.name === photoName) {
        photo.impressions = event.target.value;
        return photo;
      }
      return photo;
    });
    this.setState({photos: newPhotoArray})
  }

  displayBiddingItems() {
    return this.state.photos.map(photo => {
      return (
        <div className="img-w-bid">
          <img src={photo.preview} className="img-preview"></img>
          <input className="form-item input-item" type="text" placeholder="CPM Bid" onChange={this.handleBidChange.bind(this, photo.name)}/>
          <input className="form-item input-item" type="text" placeholder="Max Impressions" onChange={this.handleImpressionsChange.bind(this, photo.name)}/>
        </div>
      );
    });
  }

  displayConfirmCreatives(){
    return this.state.photos.map(photo => {
      console.log('photo: ', photo)
      return (
        <div className="confirm-creative">
          <img src={photo.preview} className="img-preview"></img>
          <div className="confirm-creative-info">
            <div>CPM Bid: {photo.bid}</div>
            <div>Max Impressions: {photo.impressions}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.state.currentForm === 'company') {
      return (
        <div className="splash-container">
          <Header text={'Company Information'}/>
          <CompanyForm submitForm={this.submitForm.bind(this)}/>
        </div>
      );
    } else if (this.state.currentForm === 'upload-creative') {
      if (this.state.photos.length < 5) {
        return (
          <div className="splash-container">
            <Header text={'Upload Images'}/>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop.bind(this)}>
                <div>Drop files here or click to upload</div>
              </Dropzone>
              <div className="imgs-container">
                {this.displayPhotos()}
              </div>
              <a href="#" className="submit" onClick={this.submitForm.bind(this, 'set-bids')}>Set Target Bids</a>
            </div>
          </div>
        );
      } else {
        return (
          <div className="splash-container">
            <Header text={'Upload Images'}/>
            <div className="dropzone">
              <div>You have uploaded the maximum number of images</div>
              <div className="imgs-container">
                {this.displayPhotos()}
              </div>
              <a href="#" className="submit" onClick={this.submitForm.bind(this, 'set-bids')}>Set Target Bids</a>
            </div>
          </div>
        );
      }
    } else if (this.state.currentForm === 'set-bids') {
      return (
        <div className="splash-container">
          <Header text={'Set Target Bids'}/>
          <div className="item-bid-container">
            <div className="bid-items">
              {this.displayBiddingItems()}
            </div>
            <a href="#" className="submit" onClick={this.submitForm.bind(this, 'payment-form')}>Enter Payment Information</a>
          </div>
        </div>
      )
    } else if (this.state.currentForm === 'payment-form') {
      return (
        <div className="splash-container">
          <Header text={'Payment Information'}/>
          <PaymentForm submitForm={this.submitForm.bind(this)}/>
        </div>
      )
    } else if (this.state.currentForm === 'confirm') {

      // <p>Company Name: Umbrella Corp</p>
      // <p>Address: 5 Hanover Pl</p>
      // <p>City: NY</p>
      // <p>State: NY</p>
      // <p>Postal Code: 11233</p>
      // <p>Last Name: Stevens</p>
      // <p>First Name: Roger</p>
      // <p>Email: rstevie@umbrella.corp</p>
      // <p>Phone Number: 111-222-3333</p>
      // <p>Budget: $1 Billion</p>

    // <h1>Payment Information:</h1>
    // <p>Name on Card: John Smith</p>
    // <p>Credit Card Number: 1244351451231234</p>
    // <p>Expiration Date: 12345</p>
    // <p>CVC: 131</p>

      console.log('paymentInfo: ', this.state.paymentInfo)
      return (
        <div className="splash-container">
          <Header text={'Order Confirmation'}/>
          <div className='confirm-overarch'>
            <div className='confirm-creatives'>
              <h1>Creatives:</h1>
              {this.displayConfirmCreatives()}
            </div>

            <div className='confirm-company-info'>
              <h1>Company Information:</h1>
              <p>Company Name: {this.state.companyInfo.name}</p>
              <p>Address: {this.state.companyInfo.address}</p>
              <p>City: {this.state.companyInfo.city}</p>
              <p>State: {this.state.companyInfo.state}</p>
              <p>Postal Code: {this.state.companyInfo.postalCode}</p>
              <p>Last Name: {this.state.companyInfo.lastName}</p>
              <p>First Name: {this.state.companyInfo.firstName}</p>
              <p>Email: {this.state.companyInfo.email}</p>
              <p>Phone Number: {this.state.companyInfo.phone}</p>
              <p>Budget: {this.state.companyInfo.budget}</p>
            </div>

            <div className="confirm-payment">
              <h1>Payment Information</h1>
              <p>Name on Card: {this.state.paymentInfo.name}</p>
              <p>Credit Card Number: {this.state.paymentInfo.CCNumber}</p>
              <p>Expiration Date: {this.state.paymentInfo.expiry}</p>
              <p>CVC: {this.state.paymentInfo.CVC}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}
