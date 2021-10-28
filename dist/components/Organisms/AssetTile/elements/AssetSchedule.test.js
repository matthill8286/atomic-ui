import React from 'react';
import { mountWithTheme, renderWithTheme } from "../../../../testRenderer";
import { newAssetStructuredMocks } from "./mockAsset";
import { StyleguideCalendar, IconLiveLabel } from '@excelwithbusiness/webmobile-svg-library';
import { Tag } from "../../../Atoms/Tag";
import { AssetSchedule } from "./AssetSchedule";
describe('AssetSchedule', function () {
  it.skip('renders correct snapshot with asset data', function () {
    var _newAssetStructuredMo, _newAssetStructuredMo2, _newAssetStructuredMo3, _newAssetStructuredMo4;

    var props = {
      timebox: {
        start: (_newAssetStructuredMo = newAssetStructuredMocks[0]) === null || _newAssetStructuredMo === void 0 ? void 0 : (_newAssetStructuredMo2 = _newAssetStructuredMo.timebox) === null || _newAssetStructuredMo2 === void 0 ? void 0 : _newAssetStructuredMo2.start,
        end: (_newAssetStructuredMo3 = newAssetStructuredMocks[0]) === null || _newAssetStructuredMo3 === void 0 ? void 0 : (_newAssetStructuredMo4 = _newAssetStructuredMo3.timebox) === null || _newAssetStructuredMo4 === void 0 ? void 0 : _newAssetStructuredMo4.end
      },
      color: 'white'
    };
    var wrapper = renderWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper).toMatchSnapshot();
  });
  it('Displays the Calendar icon', function () {
    var props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z'
      },
      color: 'white'
    };
    var wrapper = mountWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper.find(StyleguideCalendar)).toHaveLength(1);
  });
  it('Displays the Calendar icon when asset has no end time', function () {
    var props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: null
      },
      color: 'white'
    };
    var wrapper = mountWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper.find(StyleguideCalendar)).toHaveLength(1);
  });
  it('Displays the Tag component', function () {
    var props = {
      timebox: {
        start: '2022-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z'
      },
      color: 'white'
    };
    var wrapper = mountWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper.find(Tag)).toHaveLength(1);
  });
  it('Displays the Live icon', function () {
    var props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: '2023-10-04T10:10:30Z'
      },
      color: 'white'
    };
    var wrapper = mountWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper.find(IconLiveLabel)).toHaveLength(1);
  });
  it('Displays the Live icon when asset has no end time', function () {
    var props = {
      timebox: {
        start: '2021-07-04T10:10:30Z',
        end: null
      },
      color: 'white'
    };
    var wrapper = mountWithTheme(React.createElement(AssetSchedule, props));
    expect(wrapper.find(IconLiveLabel)).toHaveLength(1);
  });
});
//# sourceMappingURL=AssetSchedule.test.js.map