import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function AddQuoteDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-amber-600 text-center w-fit  py-3 px-6 cursor-pointer text-white rounded-4xl">
          Add a quote
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Quote</DialogTitle>
          <DialogDescription>
            Make changes to your quotes here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <label htmlFor="author" className="text-sm text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            placeholder="Enter author's name..."
          />
          <label htmlFor="quote" className="text-sm text-gray-700">
            Quote
          </label>
          <textarea
            id="quote"
            name="quote"
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
            placeholder="Enter your quote here..."
          />
        </div>
        <DialogFooter>
          <div>
            <button
              type="submit"
              className="bg-amber-600 text-white rounded-md px-4 py-2 cursor-pointer"
            >
              Save changes
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
