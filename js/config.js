// Choose a network (available options: 'testnet' and 'mainnet')
const network = 'mainnet';

// Set contest parameters
const betFee = 1; // The cost of each bet (in LSK)
const minBet = 10; // The mininum value of the prediction
const maxBet = 7500; // The maximum value of the prediction
const betAddres = '722054451264511310L'; // Address that is created for the contest
const bonusCap = 50; // Maximum provided bonus (in LSK)
const startingDate = '2019-02-01';
const predictionDate = '2019-03-01';
const deadlineDate = '2019-02-16';
const displayResultAmount = 10;

// Enables the option to manually close the contest
// and display the results in an overlay
const manualContestToggle = true;
const contestClosed = false;

// Enables the option to manually close the betting functionality.
// If disabled, bets will automatically be closed when the current
// date has passed the deadline date.
const manualBetToggle = false;
const betsClosed = false;

// Enables the option to manually enter the final BTC price.
// (will be automated in a future version)
const manualBtcPrice = true;
const btcPrice = 0;