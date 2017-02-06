import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isInvalidEmail: Ember.computed.not('isValid'),

  isMessageEmpty: Ember.computed.empty('message'),
  messageTooShort: Ember.computed.lt('message.length', 5),
  isDisabled: Ember.computed.or('isInvalidEmail','isMessageEmpty', 'messageTooShort'),

  actions: {
    sendMessage(){
      alert(`${this.get('message')} sent by ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
