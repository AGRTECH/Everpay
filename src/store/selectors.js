import { get } from "lodash";
import { createSelector } from "reselect";

const account = (state) => get(state, "web3.account");
export const accountSelector = createSelector(account, (a) => a);

const web3 = (state) => get(state, "web3.connection");
export const web3Selector = createSelector(web3, (w) => w);

const tetherLoaded = (state) => get(state, "tether.loaded", false);
export const tetherLoadedSelector = createSelector(tetherLoaded, (tl) => tl);

const tether = (state) => get(state, "tether.contract");
export const tetherSelector = createSelector(tether, (t) => t);

const everpayLoaded = (state) => get(state, "everpay.loaded", false);
export const everpayLoadedSelector = createSelector(everpayLoaded, (el) => el);

const everpay = (state) => get(state, "everpay.contract");
export const everpaySelector = createSelector(everpay, (e) => e);

const receiver = (state) => get(state, "everpay.streamRecipientAddress");
export const receiverSelector = createSelector(receiver, (e) => e);

const deposit = (state) => get(state, "everpay.streamDepositAmount");
export const depositSelector = createSelector(deposit, (e) => e);

const streamToken = (state) => get(state, "everpay.streamTokenContract");
export const streamTokenSelector = createSelector(streamToken, (e) => e);

const endTime = (state) => get(state, "everpay.streamEndTime");
export const endTimeSelector = createSelector(endTime, (e) => e);
