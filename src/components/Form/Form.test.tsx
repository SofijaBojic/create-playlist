import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Form from "./index";
import Theme from "../../styles/globalVariables";

describe("Button component", () => {
    const videoItemObj: IVideoListItem = {
        file: "//vr.jwplayer.com/content/AgqYcfAT/AgqYcfAT-8yQ1cYbs.mp4",
        image: "https://i.pinimg.com/originals/ca/a2/65/caa2654e79e2dc88c6a3c18e1a353452.jpg",
        title: "Caminandes VR"
    };
    it("should render and work correctly with wrong type", () => {
        const addVideo = jest.fn();
        const { getByTestId } = render(
            <ThemeProvider theme={Theme}>
                <Form addVideo={addVideo} />
            </ThemeProvider>
        ) as any;
        const form_file: HTMLElement = getByTestId("form_file");
        const form_image: HTMLElement = getByTestId("form_image");
        const form_title: HTMLElement = getByTestId("form_title");
        const form_button: HTMLElement = getByTestId("form_button");
        fireEvent.change(form_file, {
            target: { value: videoItemObj.file, name: "file" }
        });
        fireEvent.change(form_image, {
            target: { value: videoItemObj.image, name: "image" }
        });
        fireEvent.change(form_title, {
            target: { value: videoItemObj.title, name: "title" }
        });

        expect(form_file.getAttribute('value')).toBe(videoItemObj.file);
        expect(form_image.getAttribute('value')).toBe(videoItemObj.image);
        expect(form_title.getAttribute('value')).toBe(videoItemObj.title);

        fireEvent.click(form_button);

        expect(form_file.getAttribute('value')).toBe("");
        expect(form_image.getAttribute('value')).toBe("");
        expect(form_title.getAttribute('value')).toBe("");
    });

    it("should submit form with some empty input", () => {
        const addVideo = jest.fn();
        const { getByTestId } = render(
            <ThemeProvider theme={Theme}>
                <Form addVideo={addVideo} />
            </ThemeProvider>
        ) as any;
        const form_file: HTMLElement = getByTestId("form_file");
        const form_image: HTMLElement = getByTestId("form_image");
        const form_title: HTMLElement = getByTestId("form_title");
        const form_button: HTMLElement = getByTestId("form_button");

        fireEvent.change(form_file, {
            target: { value: videoItemObj.file, name: "file" }
        });
        fireEvent.change(form_image, {
            target: { value: "", name: "image" }
        });
        fireEvent.change(form_title, {
            target: { value: "", name: "title" }
        });


        expect(form_file.getAttribute('value')).toBe(videoItemObj.file);
        expect(form_image.getAttribute('value')).toBe("");
        expect(form_title.getAttribute('value')).toBe("");
        fireEvent.click(form_button);
        expect(form_file.getAttribute('value')).toBe(videoItemObj.file);
    });
});
