import { Ensure, includes } from '@serenity-js/assertions';
import { actorCalled } from '@serenity-js/core';
import { Navigate, Page } from '@serenity-js/web';
import { describe, it } from 'mocha';

describe('Level 0 Feature Spec', () => {

    it(`tells people what they're reading`, () =>
        actorCalled('Alice').attemptsTo(
            Navigate.to('https://serenity-js.org'),

            Ensure.that(Page.current().title(), includes('Serenity/JS')),
        ));
});
