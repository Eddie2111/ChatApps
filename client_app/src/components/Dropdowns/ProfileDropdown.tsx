'use client';
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {FiChevronDown} from 'react-icons/fi';

/**
 * @name ProfileDropDown
 * @description the profile dropdown button for profile for more options
 * @returns {JSX.Element} the dropdown button
 */
export default function ProfileDropDown(): JSX.Element {
    const variant: string = 'bordered';
    const color: string = 'success';
  return(
    <Dropdown>
      <DropdownTrigger>
        <Button
          color={color}
          variant={variant}
          className="capitalize"
        >
            More <FiChevronDown/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={color}
        variant={variant}
      >
        <DropdownItem key="new">Add Friend</DropdownItem>
        <DropdownItem key="copy">Follow</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Block This User
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
