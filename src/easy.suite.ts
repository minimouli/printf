/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Easy', () => {

    test('Binary', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/binary.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['100101101011010000111'])
    })

    test('Octal', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/octal.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['12345'])
    })

    test('Hexadecimal #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/hexadecimal1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['abcdef'])
    })

    test('Hexadecimal #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/hexadecimal2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['ABCDEF'])
    })

    test('Pointer', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/pointer.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['0x1234567'])
    })

    test('Signed integer #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/signed_integer1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Signed integer #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/signed_integer2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Unsigned integer', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/unsigned_integer.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['42'])
    })

    test('Character', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/character.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['*'])
    })

    test('String', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/string.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['hello world'])
    })

    test('Extended string', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/extended_string.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['he\\011o'])
    })

    test('Escape', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/escape.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['%'])
    })

    test('Bad parameter', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/easy/bad_parameter.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['%a'])
    })

})
