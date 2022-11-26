import React from 'react'
import { Button, Textarea, Label, TextInput } from 'flowbite-react'

const Contact = () => {
  return (
    <>
      <div className="px-48">
        <h1 className="py-5 text-3xl font-bold from-stone-800">Contact Form</h1>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" />
            </div>
            <TextInput
              id="name1"
              type="text"
              placeholder="Your Name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="Your Email "
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone1" />
            </div>
            <TextInput
              id="phone1"
              type="text"
              placeholder="Your Phone"
              required={true}
            />
          </div>

          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Message"
              required={true}
              rows={4}
            />
            <Button className='mt-3' type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
