const {zeroAddress} = require('./const');
const {equalsAll} = require('./util');

function getEventType(events, type) {
  return events.filter(e => e.event === type);
}

function getApprovalEvents(events) {
  return getEventType(events, 'Approval');
}

function getCollaboratorAddedEvents(events) {
  return getEventType(events, 'CollaboratorAdded');
}

function getCollaboratorRemovedEvents(events) {
  return getEventType(events, 'CollaboratorRemoved');
}

function getDepositedEvents(events) {
  return getEventType(events, 'Deposited');
}

function getHashUpdateEvents(events) {
  return getEventType(events, 'HashUpdate');
}

function getMetadataSetEvents(events) {
  return getEventType(events, 'MetadataSet');
}

function getMintEvents(events) {
  return getTransferEvents(events).filter(e => isMintEvent(e));
}

function getNonMintTransfers(events) {
  return getTransferEvents(events).filter(e => !isMintEvent(e));
}

function getSingleCollaboratorAddedEvents(events) {
  return getEventType(events, 'SingleCollaboratorAdded');
}

function getSingleCollaboratorRemovedEvents(events) {
  return getEventType(events, 'SingleCollaboratorRemoved');
}

function getSingleMetadataSetEvents(events) {
  return getEventType(events, 'SingleMetadataSet');
}

function getTransferEvents(events) {
  return getEventType(events, 'Transfer');
}

function getWithdrewEvents(events) {
  return getEventType(events, 'Withdrew');
}

function isMintEvent(event) {
  return equalsAll(zeroAddress, event.returnValues.from, event.returnValues[0]);
}

module.exports = {
  getEventType,
  getApprovalEvents,
  getCollaboratorAddedEvents,
  getCollaboratorRemovedEvents,
  getDepositedEvents,
  getHashUpdateEvents,
  getMetadataSetEvents,
  getMintEvents,
  getNonMintTransfers,
  getSingleCollaboratorAddedEvents,
  getSingleCollaboratorRemovedEvents,
  getSingleMetadataSetEvents,
  getTransferEvents,
  getWithdrewEvents,
};
