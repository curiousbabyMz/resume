import React, { useState } from "react"
import cn from "classnames";
import { Popover } from "antd";
import { TooltipPlacement } from "antd/lib/tooltip";

import styles from './index.scss';

const Icon = ({
  code = '',
  hoverCode = '',
  size,
  color = 'inherit',
  className = '',
  content = '',
  label = '',
  labelSize = size,
  popTrigger = [''],
  popPlacement = "bottom" as TooltipPlacement,
  disabled = false,
  onClick = (e) => { },
  src = ''
}) => {
  const [hovered, setHovered] = useState(false)
  return (
    <Popover trigger={popTrigger} content={content} placement={popPlacement}>
      <div
        className={styles.icon}
        style={{ cursor: disabled ? 'default' : 'pointer' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={(e) => {
          if (!disabled) {
            onClick(e)
          }
        }}
      >
        {
          src &&
          <img
            src={src}
            className={className}
            style={{ width: `${size}px`, height: `${size}px`, }}
          />
        }
        {
          code &&
          <span
            className={cn('icon', 'iconfont', hovered && hoverCode || code, className)}
            style={{ fontSize: `${size}px`, color, lineHeight: `${size}px` }}
          ></span>
        }
        {
          label &&
          <span
            className={cn(styles.font, className)}
            style={{ fontSize: `${labelSize}px`, color }}
          >{label}</span>
        }
      </div>
    </Popover>
  )
}

export default Icon