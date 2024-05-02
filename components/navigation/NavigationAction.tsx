"use client";

import { Plus } from "lucide-react";
import { FC } from "react";
import ActionTooltip from "../ActionTooltip";

interface NavigationActionProps {}

const NavigationAction: FC<NavigationActionProps> = ({}) => {
  return (
      <ActionTooltip side="right" align="center" label="Add a Server">
        <button className="group">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden bg-background dark:bg-neutral-700 group-hover:bg-emerald-500 items-center justify-center">
            <Plus
              className="group-hover:text-white transition text-emerald-500"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
  );
};

export default NavigationAction;
