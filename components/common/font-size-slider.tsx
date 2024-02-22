'use client';

import { FontSizeClassEnum, FontSizeValueEnum } from '@/enums/font-size.enum';
import { ConfigProvider, Slider, SliderSingleProps } from 'antd';
import { useState } from 'react';

type Props = {
  onChange?: (fontSize: FontSizeClassEnum) => void;
};

const marks: SliderSingleProps['marks'] = {
  [FontSizeValueEnum.SM]: {
    label: (
      <span className=" font-bold text-black dark:text-white text-sm">A</span>
    ),
  },
  [FontSizeValueEnum.BASE]: {
    label: (
      <span className=" font-bold text-black dark:text-white text-base">A</span>
    ),
  },
  [FontSizeValueEnum.LG]: {
    label: (
      <span className=" font-bold text-black dark:text-white text-lg">A</span>
    ),
  },
  [FontSizeValueEnum.XL]: {
    label: (
      <span className=" font-bold text-black dark:text-white text-xl">A</span>
    ),
  },
  [FontSizeValueEnum.XXL]: {
    label: (
      <span className=" font-bold text-black dark:text-white text-2xl">A</span>
    ),
  },
};

const FontSizeSlider = (props: Props) => {
  const [inputValue, setInputValue] = useState(FontSizeValueEnum.BASE);

  const onChange = (newValue: number) => {
    let fontSize: FontSizeClassEnum;
    setInputValue(newValue);

    switch (newValue) {
      case FontSizeValueEnum.SM:
        fontSize = FontSizeClassEnum.SM;
        break;
      case FontSizeValueEnum.BASE:
        fontSize = FontSizeClassEnum.BASE;
        break;
      case FontSizeValueEnum.LG:
        fontSize = FontSizeClassEnum.LG;
        break;
      case FontSizeValueEnum.XL:
        fontSize = FontSizeClassEnum.XL;
        break;
      case FontSizeValueEnum.XXL:
        fontSize = FontSizeClassEnum.XXL;
        break;
      default:
        fontSize = FontSizeClassEnum.BASE;
        break;
    }
    
    props.onChange && props.onChange(fontSize);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            // railBg: '#FFFFFF',
            // railHoverBg: '#FFFFFF',
          },
        },
      }}>
      <Slider
        min={0}
        max={100}
        step={25}
        marks={marks}
        value={inputValue}
        onChange={onChange}
      />
    </ConfigProvider>
  );
};

export default FontSizeSlider;
