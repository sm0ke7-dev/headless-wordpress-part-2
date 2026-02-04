"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6({ data }) {
  const eyebrow = data?.contact_form_eyebrow || "Contact";
  const heading = data?.contact_form_heading || "Send us a message";
  const description = data?.contact_form_description || "Tell us about your pain and what you want to get back to doing";
  const email = data?.contact_email || "hello@relume.io";
  const phone = data?.contact_phone || "+1 (408) 555-0147";
  const address = data?.contact_address || "1247 Meridian Ave, San Jose CA 95125";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">{eyebrow}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>{address}</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First name
              </Label>
              <Input type="text" id="firstName" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last name
              </Label>
              <Input type="text" id="lastName" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input type="email" id="email" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number
              </Label>
              <Input type="text" id="phone" />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">What brings you in?</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-choice">First Choice</SelectItem>
                <SelectItem value="second-choice">Second Choice</SelectItem>
                <SelectItem value="third-choice">Third Choice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">Which best describes you?</Label>
            <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Busy adult" id="#first_choice" />
                <Label htmlFor="#first_choice">Busy adult</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Athlete" id="#second_choice" />
                <Label htmlFor="#second_choice">Athlete</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Post-op patient" id="#third_choice" />
                <Label htmlFor="#third_choice">Post-op patient</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Chronic pain" id="#fourth_choice" />
                <Label htmlFor="#fourth_choice">Chronic pain</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Injury recovery" id="#fifth_choice" />
                <Label htmlFor="#fifth_choice">Injury recovery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Other" id="#other" />
                <Label htmlFor="#other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us more"
              className="min-h-[11.25rem] overflow-auto"
            />
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the privacy policy
            </Label>
          </div>
          <div>
            <Button title="Submit">Submit</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
