


const state = {
    wallet : {
        // for json and hardware wallet
        publicKey: '',
        address: '',
        //for shared wallet
        coPayers: [],
        requiredNumber:'',
        totalNumber:''
    },
    transfer: {
        balance : {
            ont: 0,
            ong: 0
        },
        from:'',
        to: '',
        amount:0,
        asset:'ONT',
        gas:0.01,
        coPayers : [],
        sponsorPayer:'',
        isRedeem: false
    },
    pendingTx: {
        
    },
    currentSigner: '',
    localCopayers : [],
    redeem: {
        claimableOng: 0,
        balanceOng: 0
    },
    nep5Ont: 0
}

const mutations = {
    UPDATE_CURRENT_WALLET(state, payload){
        state.wallet = Object.assign({}, state.wallet, payload.wallet);
    },
    UPDATE_TRANSFER(state, payload) {
        state.transfer = Object.assign({}, state.transfer, payload.transfer)
    }, 
    UPDATE_LOCAL_COPAYERS(state, payload) {
        state.localCopayers = payload.localCopayers
    },
    UPDATE_PENDINGTX(state, payload) {
        state.pendingTx = payload.pendingTx
    },
    UPDATE_CURRENT_SIGNER(state, payload) {
        state.currentSigner = payload.account
    },
    UPDATE_TRANSFER_BALANCE(state, payload) {
        state.transfer.balance = payload.balance;
    },
    CLEAR_CURRENT_TRANSFER(state, payload) {
        state.transfer = {
            balance: {
                ont: 0,
                ong: 0
            },
            from: '',
            to: '',
            amount: 0,
            asset: 'ONT',
            gas: 0.01,
            coPayers: [],
            sponsorPayer: ''
        }
    },
    UPDATE_CURRENT_REDEEM(state, payload) {
        state.redeem = payload.redeem
    },
    UPDATE_NEP5_ONT(state, payload) {
        state.nep5Ont = payload.nep5Ont
    },
    UPDATE_TRANSFER_REDEEM_TYPE(state, payload) {
        state.transfer.isRedeem = payload.type;
        state.transfer.asset = payload.type ? 'ONG' : 'ONT'
    }

}

const actions = {
    
}

export default {
    state,
    mutations,
    actions
}
