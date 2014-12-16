var should = chai.should();

if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("a group of tests", function(){
      it("respects equality", function(){
        (5).should.be.equal(5);
      });
    });
  });
}
