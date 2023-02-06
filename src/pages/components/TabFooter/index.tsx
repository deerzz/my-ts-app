import React from "react";
import {TabType} from "../../../type";
import cx from 'classnames'

interface TabFooterProps {
    className?: string;
    currentTab: TabType;
    tabs: { key: TabType, label: string }[];
    activeCount: number;
    onTabChange?: (key: TabType) => void;
    onClearClick?: () => void;
}

export const TabFooter = (props: TabFooterProps) => {
    const {className, currentTab, tabs, activeCount, onTabChange, onClearClick} = props;

    return (
        <div className={cx(className, 'flex justify-between text-[14px]')}>
            <div>{`${activeCount} ${activeCount > 1 ? 'items' : 'item'} left`}</div>
            <div className={'flex gap-x-4 text-gray-400 font-normal'}>
                {tabs.map(tab => (
                    <div className={cx("cursor-pointer", {"text-black font-semibold": tab.key === currentTab})}
                         key={tab.key}
                         onClick={() => onTabChange?.(tab.key)}>{tab.label}</div>
                ))}
            </div>
            <div className={"cursor-pointer hover:underline"} onClick={onClearClick}>Clear Completed</div>
        </div>
    )
}
