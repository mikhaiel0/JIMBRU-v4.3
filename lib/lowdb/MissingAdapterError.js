//═══════════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
class MissingAdapterError extends Error {
    constructor() {
        super();
        this.message = 'Missing Adapter';
    }
}
module.exports = { MissingAdapterError };
