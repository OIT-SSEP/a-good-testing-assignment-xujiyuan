import { expect } from 'chai';
import app from '../index';
import { agent as request } from 'supertest';
import { UserService } from '../service';
import { SomeThingClass } from '../class';

describe('Index Test', () => {
  it('should always pass', function () {
    expect(1).to.equal(1);
  });

  it('should get users for get endpoint', async () => {
    const res = await request(app).get('/');
    expect(res.body.length).equal(2222);
  });

  it('expect userService fnc works', () => {
    const result = UserService.getUser2();
    const something = new SomeThingClass('Get this test working');
    expect(something.getSomething()).equal('HELLO');
  });
});
