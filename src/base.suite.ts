/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Binary, Executable, Path } from '@minimouli/framework'
import Compiler from './objects/Compiler'

suite('Base', () => {

    test('Simple string format #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/simple_string_format1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['hello'])
    })

    test('Simple string format #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/simple_string_format2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[hello]'])
    })

    test('Double string format #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/double_string_format1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['helloworld'])
    })

    test('Double string format #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/double_string_format2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['[hello world]'])
    })

    test('Mixed string and integer #1', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/mixed_string_and_integer1.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['hello%42world'])
    })

    test('Mixed string and integer #2', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/mixed_string_and_integer2.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['%shello%d42'])
    })

    test('Empty', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/empty.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput([''])
    })

    test('No format', async () => {

        const compiler = new Compiler([
            Path.fromMouli('res/base/no_format.c')
        ])
        await compiler.compile()

        const exec = new Executable(compiler.getExecutablePath())
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).concurrent.toOutput(['hello'])
    })

})
