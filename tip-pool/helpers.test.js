describe('helpers test', () => {
    beforeEach( () => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });
    it('should calcurate tip amount total', () => {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });
    it('should calcurate bill amount total', () => {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });
    it('should calcurate tipPercent on sumPaymentTotal()', () => {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
    it('should calcurate tipPercent on calculateTipPercent(billAmt, tipAmt)', () => {
        expect(calculateTipPercent(100,20)).toEqual(20);
        expect(calculateTipPercent(100,50)).toEqual(50);
    });
    it('should generate new Td from value and append on Tr on appendTd(tr, value)', () => {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        console.log(newTr.children.length);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });

    afterEach( () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
});
